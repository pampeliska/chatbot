const converstations = new Map<string, string>();

export const conversationRepository = {
   getLastResponseId(conversationId: string) {
      return converstations.get(conversationId);
   },
   setLastResponseId(conversationId: string, responseId: string) {
      converstations.set(conversationId, responseId);
   },
};
