export const useGetUserInfo = (userId: string) => {
  const {
    setIsMobileTrue,
    setIsAccountFalse,
    setIsAccountTrue,
    setIsMobileFalse,
  } = useStore(userPersist)
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['user/info', userId],
    queryFn: async () => {
      const result = await getUserInfo(userId)
      if (result.data.phoneCheck) {
        setIsMobileTrue()
      } else {
        setIsMobileFalse()
      }
      if (result.data.bankCheck) {
        setIsAccountTrue()
      } else {
        setIsAccountFalse()
      }
      return result.data
    },
    enabled: !!userId,
    gcTime: 0,
    staleTime: 0,
  })

  return { data, isLoading, refetch, isFetching }
}
