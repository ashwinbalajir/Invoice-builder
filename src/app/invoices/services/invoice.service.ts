import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Invoice, InvoicePaginationRsp } from "../models/invoice";

const BASE_URL = "http://localhost:3000/api";
@Injectable()
export class InvoiceService {
  constructor(private httpClient: HttpClient) {}
  getInvoices(data): Observable<InvoicePaginationRsp> {
    return this.httpClient.get<InvoicePaginationRsp>(`${BASE_URL}/invoices?page=${data.page}&limit=${data.perPage}`);
  }
  postInvoices(invoice): Observable<Invoice> {
    return this.httpClient.post<Invoice>(`${BASE_URL}/invoices`, invoice);
  }
  deleteInvoice(id): Observable<Invoice> {
    return this.httpClient.delete<Invoice>(`${BASE_URL}/invoices/${id}`);
  }
  getInvoiceById(id): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`${BASE_URL}/invoices/${id}`);
  }
  updateInvoiceById(id,body:Invoice):Observable<Invoice> {
    // debugger;
    return this.httpClient.put<Invoice>(`${BASE_URL}/invoices/${id}`,body);
  }
}
