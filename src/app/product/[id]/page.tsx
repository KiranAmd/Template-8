"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};