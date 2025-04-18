import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    totalUserCount: builder.query({
      query: (data) => {
        return {
          url: "/dashboard/total-overview",
          method: "GET",
        };
      },
    }),

    getUserGrowth: builder.query({
      query: (year) => {
        return {
          url: `/dashboard/user-growth?year=${year}`,
          method: "GET",
        };
      },
    }),
    planSubscriber: builder.query({
      query: () => {
        return {
          url: "/plan/subscribers",
          method: "GET",
        };
      },
    }),
    /** category api integration */
    getAllCategory: builder.query({
      query: () => {
        return {
          url: "/category/get-all",
          method: "GET",
        };
      },
      providesTags: ["allCategory"],
    }),
    createCategory: builder.mutation({
      query: (data) => {
        return {
          url: "/category/add-category",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["allCategory"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: `/category/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["allCategory"],
    }),
    editCategory: builder.mutation({
      query: ({ formData, id }) => {
        console.log(formData, id);
        return {
          url: `/category/edit/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: ["allCategory"],
    }),
    getSingleSubscribePlan: builder.query({
      query: (id) => {
        return {
          url: `/plan/subscribe/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: ["allCategory"],
    }),
    approveDeclineMemberRequest: builder.mutation({
      query: ({ id, status }) => {
        return {
          url: `/plan/subscribe/${id}/request?status=${status}`,
          method: "PATCH",
        };
      },
    }),
    /** Get all Notification */
    getAllNotification: builder.query({
      query: () => {
        return {
          url: "/notification/get-all-notification",
          method: "GET",
        };
      },
      providesTags: ["notification"],
    }),
    
    deleteNotification: builder.mutation({
      query: (id) => {
        return {
          url: `/notification/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["notification"],
    }),
    /** Get all user */
    getAllUser: builder.query({
      query: ({ search }) => {
        return {
          url: `/auth/users?searchTerm=${search}`,
          method: "GET",
        };
      },
      providesTags: ["blockUser"],
    }),
    /** Block user */
    blockUser: builder.mutation({
      query: (id) => {
        return {
          url: `/auth/user-block-unblock/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["blockUser"],
    }),
    /** Setting APIs */
    getTermsConditions: builder.query({
      query: () => {
        return {
          url: "/manage/get-terms-conditions",
          method: "GET",
        };
      },
      providesTags: ["terms"],
    }),
    updateTermsCondition: builder.mutation({
      query: (data) => {
        return {
          url: "/manage/add-terms-conditions",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),
    getPrivacyPolicy: builder.query({
      query: () => {
        return {
          url: "/manage/get-privacy-policy",
          method: "GET",
        };
      },

      providesTags: ["privacy"],
    }),
    updatePrivacyPolicy: builder.mutation({
      query: (data) => {
        return {
          url: "/manage/add-privacy-policy",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["privacy"],
    }),

    getFaqs: builder.query({
      query: () => {
        return {
          url: "/manage/get-faq",
          method: "GET",
        };
      },
      providesTags: ["FAQ"],
    }),
    deleteFaq: builder.mutation({
      query: (id) => {
        return {
          url: `/manage/delete-faq?id=${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["FAQ"],
    }),
    createFaq: builder.mutation({
      query: (data) => {
        return {
          url: "/manage/add-faq",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["FAQ"],
    }),

    crateTrustSafety: builder.mutation({
      query: (data) => {
        return {
          url: "/manage/add-trust-safety",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Trust"],
    }),
    getTrustSafety: builder.query({
      query: () => {
        return {
          url: "/manage/get-trust-safety",
          method: "GET",
        };
      },
      providesTags: ["Trust"],
    }),
    getHostingGuide: builder.query({
      query: () => {
        return {
          url: "/manage/get-host-guidelines",
          method: "GET",
        };
      },
      providesTags: ["guide"],
    }),
    createHostingGuide: builder.mutation({
      query: (data) => {
        return {
          url: "/manage/add-host-guidelines",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["guide"],
    }),
    getTipsTricks: builder.query({
      query: () => {
        return {
          url: "/manage/get-tips-tricks",
          method: "GET",
        };
      },
      providesTags: ["tips"],
    }),

    getFeedback: builder.query({
      query: () => {
        return {
          url: "/feedback/get-all-feedback",
          method: "GET",
        };
      },
      providesTags: ["tips"],
    }),
    createTipsTricks: builder.mutation({
      query: (data) => {
        return {
          url: "/manage/add-tips-tricks",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["tips"],
    }),

    addContact: builder.mutation({
        query: (data) => {
          return {
            url: "/manage/add-contact-us",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["tips"],
      }),

      getConactUs: builder.query({
        query: () => {
          return {
            url: "/manage/get-contact-us",
            method: "GET",
          };
        },
        providesTags: ["tips"],
      }),
  }),
});

export const {
  useTotalUserCountQuery,
  useGetUserGrowthQuery,
  usePlanSubscriberQuery,
  useGetAllCategoryQuery,
  useCreateCategoryMutation,
  useGetSingleSubscribePlanQuery,
  useApproveDeclineMemberRequestMutation,
  useGetAllNotificationQuery,
  useDeleteNotificationMutation,
  useGetAllUserQuery,
  useBlockUserMutation,
  useUpdateTermsConditionMutation,
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetTermsConditionsQuery,
  useGetFaqsQuery,
  useDeleteFaqMutation,
  useCreateFaqMutation,
  useCrateTrustSafetyMutation,
  useGetTrustSafetyQuery,
  useGetHostingGuideQuery,
  useCreateHostingGuideMutation,
  useCreateTipsTricksMutation,
  useGetTipsTricksQuery,
  useAddContactMutation,
  useGetFeedbackQuery,
  useGetConactUsQuery
} = useApi;
