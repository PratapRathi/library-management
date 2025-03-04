import React, { useRef, useState } from 'react'
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from '@/lib/config';
import ImageKit from "imagekit";
import { Button } from './ui/button';
import Image from 'next/image';
import { toast } from "sonner"

const { publicKey, urlEndpoint } = config.env.imagekit;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Authentication request failed: ${errorText}`);
    }
    const data = await response.json();
    const { signature, expire, token } = data;
    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
}

const imageUpload = ({ onFileChange }: { onFileChange: (filePath: string) => void }) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => { 
    console.error(error);
    toast.error("File upload failed", {
      description: "Your file could not be uploaded. Please try again.",
      closeButton: true,
    });
  };
  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    toast.success("File uploaded successfully", {
      description: `${res.filePath} uploaded successfully`,
      closeButton: true,
    });
  };

  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
      <IKUpload className='hidden' ref={ikUploadRef} onError={onError} onSuccess={onSuccess} fileName='test-upload.png' />
      <Button className='upload-btn' onClick={(e) => {
        e.preventDefault();
        if (ikUploadRef.current) {
          // @ts-ignore
          ikUploadRef.current?.click();
        }
      }}>
        <Image src='/icons/upload.svg' alt='upload-icon' width={20} height={20} />
        <p className='text-base text-light-100'>Upload a file</p>
        {file && <p className='upload-filename'>{file.filePath}</p>}
      </Button>
      {file && <IKImage path={file.filePath} alt={file.filePath} width={500} height={300} />}
    </ImageKitProvider>
  )
}

export default imageUpload
