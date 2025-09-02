import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data;
    },
  });

  return { isLoading, isError, data };
};

export const useCreateTask = () => {
  const queryclient = useQueryClient();

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),

    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Task Added');
    },

    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isPending };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return { editTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isPending: deleteTaskLoading } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return { deleteTask, deleteTaskLoading };
};
