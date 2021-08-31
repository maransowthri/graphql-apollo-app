import { gql, useMutation } from "@apollo/client";

// Define mutation
const INCREMENT_COUNTER = gql`
  # Increments a back-end counter and gets its resulting value
  mutation IncrementCounter {
    currentValue
  }
`;

export function Increment() {
  // Pass mutation to useMutation

  const [mutateFunction, { data, loading, error }] =
    useMutation(INCREMENT_COUNTER);

  console.log({ data, loading, error });

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <p>{data}</p>} */}
      <button onClick={mutateFunction}>Add</button>
    </div>
  );
}
