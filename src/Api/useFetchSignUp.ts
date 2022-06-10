import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface SignUpApiData {
  apiKey: string;
  email: string;
  name: string;
}
export const useFetchSignUp = () => {
  const [data, setData] = useState<SignUpApiData | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const history = useHistory();
  useEffect(() => {
    const fetchSignUp = async () => {
      // apiKey="D39C02FA2-gwewxwHLl6h3PmcpxzpG-W6y6xW61CeTeukvjAaY3"
      const sleep = (ti: number) => {
        return new Promise((resolve) => setTimeout(resolve, ti));
      };
      await sleep(1000);
      axios
        .get<SignUpApiData>(
          `http://localhost:5001/tax-care-accounting-solution/us-central1/signUp${history.location.search}`
        )
        .then((res) => {
          setIsFetching((pre) => !pre);
          setData(res.data);
        })
        .catch((e) => {
          if (axios.isAxiosError(e) && e.response) {
            const {
              error: { code, message },
            }: { error: { code: string; message: string } } = e.response.data;
            history.push("/page-not-found", {
              errorCode: code,
              errorMessage: message,
            });
          } else {
            history.push("/page-not-found", {
              errorCode: 503,
              errorMessage: `Unable to connect to the server. Please try again later. `,
            });
          }
        });
    };
    fetchSignUp();
  }, [history]);
  return { data, isFetching, setIsFetching };
};
