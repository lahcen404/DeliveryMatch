import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { Admin } from '../../../core/services/admin/admin';
import { BaseChartDirective } from 'ng2-charts';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend,
  Title
);

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    BaseChartDirective
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard implements OnInit {


  totalUsers = 0;
  totalTrips = 0;
  pendingRequests = 0;
  acceptanceRate = 0;

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Utilisateurs et Trajets'
      }
    }
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['Statistiques'],
    datasets: [
      {
        label: 'Utilisateurs',
        data: [0],
        backgroundColor: 'rgba(132, 94, 194, 0.8)'
      },
      {
        label: 'Trajets',
        data: [0],
        backgroundColor: 'rgba(214, 93, 177, 0.8)'
      }
    ]
  };

  constructor(private adminService: Admin, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    this.adminService.getStats().subscribe(stats => {
      this.totalUsers = stats.totalUsers;
      this.totalTrips = stats.totalTrips;
      this.pendingRequests = stats.pendingRequests;
      this.acceptanceRate = stats.acceptanceRate;

      // update chart data
      this.barChartData.datasets[0].data = [this.totalUsers];
      this.barChartData.datasets[1].data = [this.totalTrips];

      // foorce UI update
      this.cdRef.detectChanges();
    });
  }
}
