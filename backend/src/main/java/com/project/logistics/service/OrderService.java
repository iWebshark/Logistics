package com.project.logistics.service;

import com.project.logistics.dto.neworder.NewOrPaidOrder;
import com.project.logistics.entity.OrderEntity;

import java.util.List;

public interface OrderService {
    boolean saveNewOrder(OrderEntity newOrder);
    List<NewOrPaidOrder> getNewOrPaidOrders();
}