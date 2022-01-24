import {axiosService} from '../servies/axios.service';
import {urls} from '../configs/urls';

export const photosService = {
    getById: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data),
}
