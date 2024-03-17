import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useRouter } from "next/navigation";
import { ProfileProps } from "../profile/profile";
const client = generateClient();

export default function Form(profile: any) {
  const router = useRouter();

  async function createProfile() {
    await client.graphql({
      query: mutations.createProfile,
      variables: { input: { name: profile.name ?? "", id: profile.id } },
    });

    //  try {
    //    await client.graphql({
    //      query: mutations.createProfile,
    //    });
    //  } catch (err) {
    //    console.log("error creating todo:", err);
    //  }
  }

  // update data on form submit
  async function updateProfile(formData: FormData) {
    const profileDetails = {
      id: "1f3cbde9-e3bb-471e-8c75-1175a8c21dcd",
      description: formData.get("description")?.toString() ?? "",
      name: profile.name,
    };

    const { data } = await client.graphql({
      query: mutations.updateProfile,
      variables: { input: profileDetails },
    });
  }

  if (profile && !profile.description) {
    createProfile();
  }

  const handleRefresh = () => {
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <form action={updateProfile}>
        <textarea name="description" placeholder="Add Description" />
        <br />
        <button type="submit" onClick={handleRefresh}>
          Update
        </button>
      </form>
    </>
  );
}
