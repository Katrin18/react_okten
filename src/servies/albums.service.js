import {axiosService} from '../servies/axios.service';
import {urls} from '../configs/urls';

export const albumsService = {
    getAll: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
}
