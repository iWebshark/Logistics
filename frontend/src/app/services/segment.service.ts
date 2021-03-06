import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SegmentModel} from "../models/segment.model";
import {Observable} from "rxjs";
import {PointModel} from "../models/point.model";

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  constructor(private http: HttpClient) { }

  createSegment(segment: SegmentModel):Observable<Boolean>{
    return this.http.post<Boolean>("/api/segment", segment)
  }

  getAllSegments():Observable<SegmentModel[]>{
    return this.http.get<SegmentModel[]>("/api/segment/all")
  }
}
