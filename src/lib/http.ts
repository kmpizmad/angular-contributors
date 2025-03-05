import axios from 'axios';

export const httpClient = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});
