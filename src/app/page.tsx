import PostCard from "@/components/molecules/PostCard";

const mockData = {
  title: 'O último prgrama do último programa do mundo',
  slug: 'o-ultimo-programa-do-ultimo-programa-do-mundo',
  datetime: "2024-10-11T23:25:30-03:00",
  description: "“É claro que é politicamente importante “contestar” as várias formas de poder e dominação: estas últimas, contudo, não podem ser compreendidas a menos que suas relações funcionais com a exploração econômica sejam articulada” (Frederic Jameson)“[Kurt] Cobain sabia que ele era apenas mais uma peça do espetáculo, que nada funcionava melhor na MTV do que um…"
}

export default function Home() {
  return (
    <h1 className="header">
      <PostCard {...mockData} />
      <PostCard {...mockData} />
    </h1>
  );
}
