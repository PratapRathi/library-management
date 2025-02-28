import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import BookCoverSvg from './BookCoverSvg';

type BookCoverVarient = 'extraSmall' | 'regular' | 'small' | 'medium' | 'wide';

const variantStyles: Record<BookCoverVarient, string> = {
  extraSmall: 'book-cover_extra_small',
  regular: 'book-cover_regular',
  small: 'book-cover_small',
  medium: 'book-cover_medium',
  wide: 'book-cover_wide',
}

interface BookCoverProps {
  className?: string;
  variant?: BookCoverVarient;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({ className, coverColor = '', coverImage = 'https://placehold.co/600x400.png', variant = 'regular' }: BookCoverProps) => {
  return (
    <div className={cn('relative transition-all duration-300', variantStyles[variant], className)}>
      <BookCoverSvg coverColor={coverColor} />
      <div className='absolute z-10' style={{ left: "12%", width: "87.5%", height: "88%" }}>
        <Image src={coverImage} alt='Book Cover' fill className='rounded-sm object-fill' />
      </div>
    </div>
  )
}

export default BookCover
