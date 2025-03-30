interface FeatureListProps {
  features: string[]
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="mx-auto max-w-md space-y-4 md:mx-0">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#ff8c4d] text-[#ff8c4d]">
            <div className="h-2 w-2 rounded-full bg-[#ff8c4d]"></div>
          </div>
          <span className="text-base text-[#f5f0d9] text-start md:text-lg">{feature}</span>
        </li>
      ))}
    </ul>
  )
}

