import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useProjects = () => {
    const { data: projects = [], refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axios.get('https://fuad-rahat-server.vercel.app/photos');
            return res.data;
        }
    });
    return [projects, refetch];
};

export default useProjects;
