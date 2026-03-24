import Image from 'next/image';

export default function MyImage({
  src,
  alt,
  className = '',
  fill = false,
  width = 800,
  height = 500,
  sizes = '(max-width: 768px) 100vw, 800px',
  priority = false,
  ...rest
}) {
  if (fill) {
    return (
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${className}`}
          priority={priority}
          {...rest}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-auto">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={`w-full h-auto object-cover rounded-xl ${className}`}
        priority={priority}
        {...rest}
      />
    </div>
  );
}
