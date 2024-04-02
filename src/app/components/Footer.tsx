import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";

function Footer({ signOut, user }: WithAuthenticatorProps) {
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

export default withAuthenticator(Footer);
