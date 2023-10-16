/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';

@Controller()
export class AppController {
  constructor(private readonly octokitService: OctokitService) {}

  @Get()
  async getCommits() {
    // we write a getCommits function to fetch the data we require (the commits of our repository), using the octokitService
    const response = await this.octokitService.request(
      `GET /repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}/commits`,
    );
    // once we get the response, we return the data property that's coming from it, which contains our array of commits that we're later going to use in our frontend.
    return response.data;
  }
}
