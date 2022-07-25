import libraryGetRefs from './libraryGetRefs.js';
import { MovieAPI } from '../movieAPI.js';
import { libraryRenderMarkup } from './libraryRenderMarkup.js';
import Notiflix, { Notify } from 'notiflix';

const movieAPI = new MovieAPI();

const LOCAL_STORAGE_QUEUE_KEY = 'QUEUE';

localStorage.getItem(LOCAL_STORAGE_QUEUE_KEY);
const receivedDataWatched = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_QUEUE_KEY)
);

libraryGetRefs().queueBtnRef.addEventListener('click', onQueueBtnHandle);

function onQueueBtnHandle() {
  if (receivedDataWatched === null) {
    Notify.warning('Please go to home page and add movie to "Watched" list');
    libraryGetRefs().emptyListContainer.classList.remove('is-hidden');
    return;
  }
  libraryGetRefs().containerListRef.innerHTML = '';
  const markup = receivedDataWatched
    .map(element => {
      return libraryRenderMarkup(element);
    })
    .join('');
  libraryGetRefs().containerListRef.insertAdjacentHTML('beforeend', markup);
}