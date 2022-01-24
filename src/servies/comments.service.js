import {axiosService} from '../servies/axios.service';
import {urls} from '../configs/urls';

export const commentsService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}
