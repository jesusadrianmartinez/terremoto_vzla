import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    sendData: builder.mutation<null, FormData>({
      query: (data) => ({
        url: "",
        method: "POST",
        headers: {
          "x-make-apikey": process.env.NEXT_PUBLIC_API_KEY,
        },
        body: data,
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useSendDataMutation } = formApi;
