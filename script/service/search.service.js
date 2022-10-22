
class SearchService {
    static async search(content) {
      const { data } = await HttpClient.api.get(`posts/search?filter=${content}`)
    return data;
    }
  }