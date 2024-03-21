import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expiratinDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expiratinDate.getTime() - now.getTime();

  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function loader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/");
  }

  return null;
}
