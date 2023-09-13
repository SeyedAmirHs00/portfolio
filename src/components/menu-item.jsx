export default function MenuItem({img, desc, alt}) {
    return (
        <div className="flex flex-col gap-1 items-center">
            <img className="w-14 h-14" src={img} alt={alt} />
            <div className="text-center">{desc}</div>
        </div>
    );
}