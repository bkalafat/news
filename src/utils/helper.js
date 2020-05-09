export function getEnvironmentUrl() {
  let url = "https://localhost:5001/api/";

  if (process.env.NODE_ENV === "production") {
    url = "https://haberibul.azurewebsites.net/api/";
  }

  return url;
}