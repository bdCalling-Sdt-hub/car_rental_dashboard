import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    
    getProfile: builder.query({
      query: () => {
        return {
          url: "/admin/profile",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),
    forgotPassword: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: email,
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forget-pass-otp-verify",
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: data,
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/edit-profile",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/change-password",
          method: "PATCH",
          body: data,
        };
      },
    }),
    getHostUser: builder.query({
      query: ({ user, page, search }) => {
        return {
          url: `/dashboard/get-all-user?role=${user}&page=${page}&searchTerm=${search}`,
          method: "GET",
        };

      },
      providesTags: ["host"],
    }),

    blockUserHost: builder.mutation({
      query: (data) => ({
        url: `/dashboard/block-unblock-user`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["host"], 
    }),

    deleteUser :  builder.mutation({
      query : (data)=>{
          return {
              url : `/dashboard/delete-user`,
              method : 'DELETE',
              body: data,
          }
      },
      invalidatesTags :['host']
  }),
  }),
});

export const {
  useLoginAdminMutation,
  useGetProfileQuery,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetHostUserQuery,
  useBlockUserHostMutation,
  useDeleteUserMutation
} = useApi;
