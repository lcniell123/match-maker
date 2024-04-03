import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Footer() {
  const { signOut } = useAuthenticator();

  return (
    <>
      <button
        onClick={signOut}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign out
      </button>
    </>
  );
}
