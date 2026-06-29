import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BalanceResponse,
  MetricsResponse,
  CollaboratorsResponse,
  BalanceRow,
  MetricsRow,
  CollaboratorRow,
} from "@/types/TablesType";

export const tablesApi = createApi({
  reducerPath: "tablesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SHEETS_API_URL,
  }),
  endpoints: (builder) => ({
    getBalancesData: builder.query<BalanceRow[], null>({
      query: () => ({
        url: `/${process.env.NEXT_PUBLIC_SHEET_BALANCES_ID}/values/Web?key=${process.env.NEXT_PUBLIC_SHEET_API_KEY}`,
        method: "GET",
      }),
      transformResponse: (response: BalanceResponse): BalanceRow[] => {
        if (!response.values || response.values.length <= 1) return [];

        const [, ...rows] = response.values;

        return rows.map((row) => ({
          date: row[0] || "",
          concept: row[1] || "",
          amount: row[2] || "",
          currency: row[3] || "",
          status: row[4] || "",
        }));
      },
    }),
    getMetricsData: builder.query<MetricsRow[], null>({
      query: () => ({
        url: `/${process.env.NEXT_PUBLIC_SHEET_BALANCES_ID}/values/Totales!A5:F?key=${process.env.NEXT_PUBLIC_SHEET_API_KEY}`,
        method: "GET",
      }),
      transformResponse: (response: MetricsResponse): MetricsRow[] => {
        if (!response.values || response.values.length <= 1) return [];

        const [, ...rows] = response.values;

        return rows.map((row) => ({
          fundsRaised: row[0] || "",
          fundsUsed: row[1] || "",
          peopleHelped: row[2] || "",
          familiesAssisted: row[3] || "",
          rescuersSupported: row[4] || "",
          lastUpdate: row[5] || "",
        }));
      },
    }),
    getCollaboratorsData: builder.query<CollaboratorRow[], null>({
      query: () => ({
        url: `/${process.env.NEXT_PUBLIC_SHEET_COLLABORATORS_ID}/values/Web?key=${process.env.NEXT_PUBLIC_SHEET_API_KEY}`,
        method: "GET",
      }),
      transformResponse: (
        response: CollaboratorsResponse,
      ): CollaboratorRow[] => {
        if (!response.values || response.values.length <= 1) return [];

        const [, ...rows] = response.values;

        return rows.map((row) => ({
          volunteer: row[0] || "",
          location: row[1] || "",
          support_proposed: row[2] || "",
          phone: row[3] || "",
        }));
      },
    }),
  }),
});

export const {
  useGetBalancesDataQuery,
  useGetMetricsDataQuery,
  useGetCollaboratorsDataQuery,
} = tablesApi;
