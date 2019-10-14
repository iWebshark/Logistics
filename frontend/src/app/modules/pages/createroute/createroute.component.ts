import {Component, OnInit} from '@angular/core';
import {PointModel} from "../../../models/point.model";
import {PointService} from "../../../services/point.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-createroute',
  templateUrl: './createroute.component.html',
  styleUrls: ['./createroute.component.css']
})
export class CreaterouteComponent implements OnInit {

  public point: PointModel = new PointModel();
  public form: FormGroup;
  public pointNameSubmitted: boolean;
  public pointExists: boolean = false;

  constructor(private pointService: PointService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      pointName: [null, Validators.required]
    });
  }

  get f() { return this.form.controls; }

  createPoint() {
    this.pointNameSubmitted = true;
    if (!this.form.invalid) {
      this.pointService.getPointByName(this.point.name).subscribe(value => {
        if (value == null) {
          this.pointService.createPoint(this.point).subscribe(value => {
            this.pointExists = false;
          });
        } else {
          this.pointExists = true;
        }
      });
    }
  }
}
