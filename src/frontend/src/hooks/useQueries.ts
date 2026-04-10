import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useBookAppointment() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth,
      message,
    }: {
      name: string;
      dateOfBirth: string;
      timeOfBirth: string;
      placeOfBirth: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).bookAppointment(
        name,
        dateOfBirth,
        timeOfBirth,
        placeOfBirth,
        message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
}
