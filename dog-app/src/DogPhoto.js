import { gql, useQuery } from "@apollo/client";

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export function DogPhoto({ breed }) {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    // pollInterval: 0, // Don't repoll or repoll for every x ms
    notifyOnNetworkStatusChange: true, // loader for refetch
    fetchPolicy: "cache-first", // Doesn't check cache before making a network request
    nextFetchPolicy: "cache-first" // Used for subsequent executions
  });

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <>
      <img
        src={data.dog.displayImage}
        alt="Dog"
        style={{ height: 100, width: 100 }}
      />
      <button
        onClick={() =>
          refetch({
            breed: "dalmatian", // Always refetches a dalmatian instead of original breed
          })
        }
      >
        Refetch!
      </button>
    </>
  );
}
