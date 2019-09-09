// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const users = [
  {
    avatar: 'https://lab.lectrum.io/redux/api/image/4luucyyhwlwd/placeholder.jpg',
    firstName: 'John',
    id: '5d569247949e6017ac81d82e',
    lastName: 'Doe',
  },
  {
    avatar: 'https://lab.lectrum.io/redux/api/image/4luucyyhwlwd/ikn93zLIlJ.jpg',
    firstName: 'Anna-1',
    id: '5d59465b949e608bf681d839',
    lastName: 'Gashenko',
  },
];

const userProfile = {
  id: 'TEST_ID',
  avatar: 'TEST_AVATAR',
  firstName: 'Walter',
  lastName: 'White',
  token,
};

const credentials = {
  email: 'test@email.com',
  password: '1111',
  remember: true,
};

const responseDataSuccess = {
  data: userProfile,
  message: successMesasge,
};

const responseDataFail = {
  message: errorMessage,
};

const fetchResponseSuccess = {
  status: 200,
  json: jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseFail401 = {
  status: 401,
  json: jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
  status: 400,
  json: jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

const newName = {
  firstName: 'Walter',
  lastName: 'White',
};
const newAvatar = ['avatar'];
const newPassword = {
  oldPassword: 12345,
  newPassword: 123456,
};

global.__ = {
  userProfile,
  errorMessage,
  token,
  error,
  responseDataSuccess,
  responseDataFail,
  fetchResponseSuccess,
  fetchResponseFail401,
  fetchResponseFail400,
  credentials,
  url,
  users,
  newName,
  newAvatar,
  newPassword,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
