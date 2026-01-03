import api from "@/lib/axios";
//Register a new user
export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    return res.data;
  } catch (err: any) {
    const message = err.response?.data?.message || "Failed to register";
    throw new Error(message);
  }
};

//Authenticate the user
export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/auth/login", credentials);
    return res.data;
  } catch (err: any) {
    const message = err.response?.data?.message || "Failed to login";
    throw new Error(message);
  }
};

// logout the logged-in user
export const logoutUser = async () => {
  try {
    await api.post("/auth/logout");
  } catch (err: any) {
    const message = err.response?.data?.message || "Failed to logout";
    throw new Error(message);
  }
};

//refresh the access token
export const refreshAccessToken = async () => {
  try {
    const res = await api.post("/auth/refresh");
    return res.data;
  } catch (err: any) {
    const message =
      err.response?.data?.message || "Failed to refresh access token";
    throw new Error(message);
  }
};
