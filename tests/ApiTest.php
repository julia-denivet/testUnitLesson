<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase
{
    public function testApiAddition(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('POST', '/api/calculator/addition', [
                'value1' => '1',
                'value2' => '1',
            ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['value' => 2], $responseData);
    }
    
    public function testApiSubstraction(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('POST', 'api/calculator/substraction', [
                'value1' => '2',
                'value2' => '1',
            ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['value' => 1], $responseData);
    }

    public function testApiDivision(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('POST', 'api/calculator/division', [
                'value1' => '2',
                'value2' => '2',
            ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['value' => 1], $responseData);
    }

    public function testApiModulo(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('POST', 'api/calculator/modulo', [
                'value1' => '5',
                'value2' => '3',
            ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['value' => 2], $responseData);
    }

    public function testApiSquare(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('POST', 'api/calculator/square', [
                'value1' => '25',
            ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['value' => 5], $responseData);
    }

    
}