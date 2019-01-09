class ApiService {

  _apiUrl = 'http://localhost:3000/data/api-data.json';

  async getData() {
    const res = await fetch(this._apiUrl);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiUrl}` +
        `, received ${res.status}`)
    }

    return await res.json();
  }
}

export default ApiService
