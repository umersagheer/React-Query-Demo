import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RQSuperHeroes = () => {
  const result = useQuery({
    queryKey: ["super-heroes"],
    queryFn: () => {
      return axios.get("http://localhost:4000/superheroes");
    },
  });

  if (result.isError) {
    return (
      <>
        <div>Error in fetching</div>
        <div>{result.error.message}</div>
      </>
    );
  }
  if (result.isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="text-2xl">
      {result.data?.data.map((hero) => {
        return <h2 key={hero.id}>{hero.name}</h2>;
      })}
    </div>
  );
};

export default RQSuperHeroes;
