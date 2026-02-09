export function PageHeader({
  tag,
  title,
  description,
}: {
  tag: string
  title: string
  description: string
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-retro-gold mb-2">// {tag}</p>
      <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3 text-balance">
        {title}
      </h1>
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
        {description}
      </p>
      <div className="mt-6 h-px bg-gradient-to-r from-retro-gold/40 via-retro-teal/20 to-transparent" />
    </div>
  )
}
