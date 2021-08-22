import http from "../service/http-common";

class ProductService {
  getAll() {
    return http.get("/products");
  }

  getProductbyId(id) {
    return http.get(`/productById/${id}`);
  }

  create(data) {
    return http.post("/addProduct", data);
  }

  update(id, data) {
    return http.put(`/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }
  getPDFbyId(pdfid,pdfType) {
    return http.get(`/abc/${pdfid}/${pdfType}`,{ headers: this.headers, responseType: "blob" });
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new ProductService();