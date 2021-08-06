function Button({title,url}) {
    return (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href={url}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  font-greenText border border-green-x rounded-md shadow-sm text-sm font-normal text-green-x bg-transparent hover:bg-green-tint"
                >
                  {title}
                </a>
        </div>
    )
}

export default Button
