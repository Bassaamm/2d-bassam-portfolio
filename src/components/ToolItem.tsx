interface ToolItemProps {
  src: string;
  alt: string;
  name: string;
  width?: number;
  height?: number;
}

export default function ToolItem({
  src,
  alt,
  name,
  width = 75,
  height = 75,
}: ToolItemProps) {
  return (
    <div className="flex gap-2 flex-col justify-center">
      <div className="flex gap-2 items-center flex-col">
        <img
          src={src}
          alt={alt}
          className="px-2"
          width={width}
          height={height}
        />
        <p>{name}</p>
      </div>
    </div>
  );
}
