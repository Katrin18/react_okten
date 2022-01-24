import {axiosService} from '../servies/axios.service';
import {urls} from '../configs/urls';

export const userPostsService = {
    getById: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}
