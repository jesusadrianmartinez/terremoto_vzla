import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type SolicitarAyudaPayload = {
  formType: "solicitar_ayuda";
  fullName: string;
  phone: string;
  location: string;
  needs: string;
};

type OfrecerAyudaPayload = {
  formType: "ofrecer_ayuda";
  firstName: string;
  location: string;
  phone: string;
  collaboration: string;
};

type FormData = SolicitarAyudaPayload | OfrecerAyudaPayload;

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
