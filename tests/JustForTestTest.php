<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use App\Service\JustForTestService;
use App\Entity\User;


class JustForTestTest extends KernelTestCase
{
    public function testAssertSame(): void
    {
        $kernel = self::bootKernel();
        $container = static::getContainer();
        $justForTest = $container->get(JustForTestService::class);
        $this->assertSame('test', $kernel->getEnvironment());
        
    }

    public function testAssertTrue(): void
    {
        $kernel = self::bootKernel();
        $container = static::getContainer();
        $justForTest = $container->get(JustForTestService::class);
        $this->assertTrue($justForTest->testBool());
    }

    public function testAssertEmpty(): void
    {
        $kernel = self::bootKernel();
        $container = static::getContainer();
        $justForTest = $container->get(JustForTestService::class);
        $this->assertEmpty($justForTest->testEmpty());
    }

    public function testAssertEqual(): void
    {
        $kernel = self::bootKernel();
        $container = static::getContainer();
        $justForTest = $container->get(JustForTestService::class);
        $this->assertEquals('same', $justForTest->testAssertEquals());
    }

    public function testAssertArrayHasKey(): void
    {
        $kernel = self::bootKernel();
        $container = static::getContainer();
        $justForTest = $container->get(JustForTestService::class);
        $this->assertArrayHasKey('foo', $justForTest->testAssertArrayHasKey());
    }
    
    public function testAssertInstanceOf(): void
    {
        $kernel = self::bootKernel();
        $container = static::getContainer();
        $justForTest = $container->get(JustForTestService::class);
        $this->assertInstanceOf(User::class, $justForTest->testInstanceOf());
    }
    
    public function testAssertJsonStringEqualsJsonString(): void
    {
        $kernel = self::bootKernel();
        $container = static::getContainer();
        $justForTest = $container->get(JustForTestService::class);
        $this->assertJsonStringEqualsJsonString(User::class, $justForTest->testAssertJsonStringEqualsJsonString());
    }

    public function  testAssertLessThan(): void
    {
        $kernel = self::bootKernel();
        $container = static::getContainer();
        $justForTest = $container->get(JustForTestService::class);
        $this->assertLessThan(User::class, $justForTest->testAssertLessThan());
    }
}

        
        
       

       