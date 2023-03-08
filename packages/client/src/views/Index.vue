<template>
  <div>{{ data }} MEEN</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useQuery, useMutation, useQueryClient } from "vue-query";
import { trpc } from "../api/trpc";

const queryClient = useQueryClient();
const getMessages = () => trpc.getMessage.query();
const { isError, isLoading, data, refetch } = useQuery(
  "getMessages",
  getMessages,
  {
    refetchOnWindowFocus: false,
  }
);
</script>
