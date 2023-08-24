import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RecordsService {
  private jsonServerUrl = 'http://localhost:3001';

  async findAll() {
    const response = await axios.get(`${this.jsonServerUrl}/records`);
    return response.data;
  }

  async findOne(id: number) {
    const response = await axios.get(`${this.jsonServerUrl}/records/${id}`);
    return response.data;
  }

  async createOrUpdate(record: { id: number; name: string }) {
    if (record.id) {
      // Update record
      const response = await axios.put(
        `${this.jsonServerUrl}/records/${record.id}`,
        record,
      );
      return response.data;
    } else {
      // Create record
      const response = await axios.post(
        `${this.jsonServerUrl}/records`,
        record,
      );
      return response.data;
    }
  }
}
