interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-[#1a1a1a] py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3498db] mb-4">{title}</h1>
        {description && <p className="text-lg text-gray-300">{description}</p>}
      </div>
    </div>
  )
}
