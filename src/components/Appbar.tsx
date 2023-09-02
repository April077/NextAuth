import { Typography, Button } from "@mui/material";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";

export default function Home({ session }) {
  console.log(session);
  return (
    <div>
      {session.user && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: ".5rem",
          }}
        >
          {" "}
          <img
            style={{ width: "50px", borderRadius: "50%" }}
            src={session.data.user?.image}
          ></img>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      )}
      {!session.user && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: ".5rem",
          }}
        >
          <Typography variant="h4">Ivy.io</Typography>{" "}
          <div>
            <Button
              variant="contained"
              onClick={() => {
                signIn();
              }}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
