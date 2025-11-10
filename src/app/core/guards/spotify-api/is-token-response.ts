
import { SpotifyTokenResponse } from "../../models/spotify/interface_data";


export function isTokenResponse(body: any): body is SpotifyTokenResponse {
  return (
    body &&
    typeof body === 'object' &&
    'access_token' in body &&
    'token_type' in body &&
    'expires_in' in body
  );
}
