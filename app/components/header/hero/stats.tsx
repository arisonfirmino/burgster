function HeroStats() {
  const stats = [
    { value: "+100K", label: "Smash já devorados por milhares" },
    { value: "90%", label: "Ingredientes frescos e selecionados" },
    { value: "+15", label: "Unidades espalhando sabor pelo Brasil" },
  ];

  return (
    <ul className="flex items-center gap-5">
      {stats.map((stat, index) => (
        <li key={stat.label} className="flex items-center gap-5">
          <div className="text-center">
            <span className="text-xl font-medium">{stat.value}</span>
            <p className="text-xs">{stat.label}</p>
          </div>
          {index < stats.length - 1 && <span className="bg-border h-10 w-px" />}
        </li>
      ))}
    </ul>
  );
}

export { HeroStats };
